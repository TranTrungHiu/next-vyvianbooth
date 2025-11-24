import ImageUploader from "@/components/image-uploader";

export default function UploadPage() {
  return (
    <main className="glass-effect place-self-center rounded-3xl px-8 py-8 shadow-2xl">
      <h1 className="gradient-text mb-6 text-center text-2xl font-bold md:text-4xl">
        Upload your photo(s)!
      </h1>
      <ImageUploader />
    </main>
  );
}
