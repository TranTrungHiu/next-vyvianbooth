"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { X, Send, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import { useImagesStore } from "@/providers/images-store-provider";
import { useRouter } from "next/navigation";

export default function ImageUploader() {
  const router = useRouter();
  const { addImages } = useImagesStore((store) => store);
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create an array of refs for each file input
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null]);

  // Clean up object URLs when component unmounts or images change
  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [images]);

  const isValidImageFile = (file: File): boolean => {
    // Safari sometimes returns empty string for file.type
    // Check by file extension as fallback
    if (file.type && file.type.startsWith("image/")) {
      return true;
    }
    
    // Fallback: check file extension
    const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"];
    const fileName = file.name.toLowerCase();
    return validExtensions.some((ext) => fileName.endsWith(ext));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    // Validate image file with Safari-compatible check
    if (!isValidImageFile(file)) {
      console.warn("Invalid image file:", file.name);
      return;
    }

    try {
      // Create a new image object
      const newImage = {
        file,
        preview: URL.createObjectURL(file),
      };

      // Update the images array
      setImages((prev) => {
        const newImages = [...prev];

        // If we're replacing an existing image, revoke its URL
        if (index < newImages.length) {
          URL.revokeObjectURL(newImages[index].preview);
          newImages[index] = newImage;
        } else {
          // Otherwise add to the end
          newImages.push(newImage);
        }

        return newImages.slice(0, 3); // Ensure max 3 images
      });
    } catch (error) {
      console.error("Error handling file:", error);
    }

    // Reset the file input - Safari needs this to allow re-selecting the same file
    // Use setTimeout to ensure it happens after the event is processed
    setTimeout(() => {
      if (fileInputRefs.current[index]) {
        fileInputRefs.current[index]!.value = "";
      }
    }, 0);
  };

  const removeImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the box click

    setImages((prev) => {
      // Revoke the object URL to prevent memory leaks
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(index);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only clear dragging state if we're actually leaving the drop zone
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDragging(null);
    }
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(null);

    const files = e.dataTransfer?.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    // Validate image file with Safari-compatible check
    if (!isValidImageFile(file)) {
      console.warn("Invalid image file:", file.name);
      return;
    }

    try {
      // Create a new image object
      const newImage = {
        file,
        preview: URL.createObjectURL(file),
      };

      // Update the images array
      setImages((prev) => {
        const newImages = [...prev];

        // If we're replacing an existing image, revoke its URL
        if (index < newImages.length) {
          URL.revokeObjectURL(newImages[index].preview);
          newImages[index] = newImage;
        } else {
          // Otherwise add to the end
          newImages.push(newImage);
        }

        return newImages.slice(0, 3); // Ensure max 3 images
      });
    } catch (error) {
      console.error("Error handling dropped file:", error);
    }
  };

  const triggerFileInput = (index: number, e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const input = fileInputRefs.current[index];
    if (!input) {
      console.warn(`File input at index ${index} not found`);
      return;
    }
    
    // Safari requires file input to be triggered from a user gesture
    // Try to click it directly - this should work if input is in DOM
    try {
      // Ensure input is accessible
      input.style.pointerEvents = 'auto';
      
      // Use requestAnimationFrame to ensure it's in the next frame
      requestAnimationFrame(() => {
        try {
          input.click();
        } catch (err) {
          console.error('Error clicking file input:', err);
        }
      });
    } catch (error) {
      console.error('Error triggering file input:', error);
    }
  };


  // Function to convert a File to a data URL
  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to convert file to data URL"));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error reading file"));
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async () => {
    if (images.length === 0) return;

    try {
      setIsSubmitting(true);

      // Convert all files to data URLs
      const dataUrls = await Promise.all(
        images.map((image) => fileToDataUrl(image.file)),
      );

      // Pass the data URLs to the onSubmit callback
      addImages(dataUrls);

      // Optional: Clear images after successful submission
      // images.forEach(image => URL.revokeObjectURL(image.preview))
      // setImages([])

      // Redirect to the edit page
      router.push("/edit");
    } catch (error) {
      console.error("Error converting or submitting images:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full p-2">
      <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => {
          const image = images[index];
          const isRequired = index === 0 && images.length === 0;

          return (
            <Card
              key={index}
              className={`relative flex aspect-square w-[220px] items-center justify-center border-2 bg-[#F6F0F0] ${isDragging === index ? "border-primary border-dashed" : "border-border"} ${isRequired ? "border-primary/50" : ""} hover:border-primary/70 overflow-hidden rounded-lg transition-all hover:shadow-sm`}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e, index)}
            >
              <input
                id={`file-input-${index}`}
                type="file"
                ref={(el) => {
                  fileInputRefs.current[index] = el;
                }}
                onChange={(e) => handleFileChange(e, index)}
                accept="image/*"
                style={{ 
                  position: "absolute",
                  width: image ? "1px" : "100%",
                  height: image ? "1px" : "100%",
                  top: 0,
                  left: 0,
                  opacity: 0,
                  cursor: "pointer",
                  zIndex: image ? 1 : 5,
                  pointerEvents: image ? "none" : "auto",
                  ...(image ? {
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: 0
                  } : {})
                }}
              />
              
              {image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.preview || "/placeholder.svg"}
                    alt={`Uploaded image ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover cursor-pointer"
                    onClick={(e) => triggerFileInput(index, e)}
                    style={{ zIndex: 0 }}
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 z-30 h-8 w-8 rounded-full opacity-90 hover:opacity-100"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeImage(index, e);
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove image</span>
                  </Button>
                </>
              ) : (
                <div 
                  className="absolute inset-0 z-0 flex flex-col items-center justify-center p-4 text-muted-foreground group"
                  style={{ pointerEvents: "none" }}
                >
                  <ImageIcon className="mb-2 h-10 w-10 transition-colors group-hover:text-primary" />
                  <span className="text-xs mt-2">Nhấn để chọn ảnh</span>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          onClick={handleSubmit}
          disabled={images.length === 0 || isSubmitting}
          className="flex items-center gap-2"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Đang gửi..." : "Gửi ảnh"}
        </Button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-muted-foreground text-sm">
          {images.length === 0
            ? "Tải lên ít nhất 1 ảnh để gửi"
            : `${images.length} trong 3 ảnh đã tải lên (sẵn sàng để gửi)`}
        </p>
      </div>
    </div>
  );
}
