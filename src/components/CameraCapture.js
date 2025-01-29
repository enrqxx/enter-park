import Webcam from "react-webcam";
import { useState, useReff } from "react";

export default function CameraCapture({ onCapture }) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = webcamRef.current.getScreenshot();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <div className="camera-container">
      {imgSrc ? (
        <img src={imgSrc} alt="Captured" />
      ) : (
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      )}
      <button onClick={capture}>Ambil Foto</button>
    </div>
  );
}
