import ImageUploader from "@/components/image-uploader";

export default function UploadPage() {
  return (
    <main className="glass-effect place-self-center rounded-3xl px-6 py-5 shadow-2xl">
      <h1 className="gradient-text mb-4 text-center text-xl font-bold md:text-3xl">
        Tải ảnh của bạn lên!
      </h1>
      <ImageUploader />
    </main>
  );
}
