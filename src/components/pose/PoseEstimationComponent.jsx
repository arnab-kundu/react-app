import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';

const PoseEstimationComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const runPoseEstimation = async () => {
      const net = await posenet.load();
      const video = videoRef.current;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            video.srcObject = stream;
            video.play();
          });
      }

      const poseDetectionFrame = async () => {
        const pose = await net.estimateSinglePose(video);
        console.log(pose); // or do something with the pose data
        requestAnimationFrame(poseDetectionFrame);
      };

      poseDetectionFrame();
    };

    runPoseEstimation();

    return () => {
      // Cleanup code
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} width="640" height="480" />
    </div>
  );
};

export default PoseEstimationComponent;
