import { WebcamCapture } from "./webcam-capture";

export default function CameraPage() {
  return (
    <main className="glass-effect place-self-center px-5 py-5 rounded-3xl shadow-2xl">
      <WebcamCapture />
    </main>
  );
}
