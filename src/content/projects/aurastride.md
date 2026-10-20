---
title: AuraStride
tagline: AI navigation app for the visually impaired
summary: A Flutter app that guides visually impaired students around Bethlehem University's campus with voice directions and real-time obstacle alerts.
role: Built the on-device object detection and the GPS campus navigation, and field-tested the app.
context: Graduation project · Team · Bethlehem University
stack: [Flutter, Dart, TensorFlow Lite, YOLOv5, Google Maps, Firebase, Text-to-Speech]
cover: ../../assets/projects/aurastride-onboarding.jpg
coverAlt: Three AuraStride onboarding screens, Welcome, Real-Time Guidance and Safety at Every Step
gallery:
  - src: ../../assets/projects/aurastride-navigation.jpg
    alt: AuraStride navigation screen showing the Bethlehem University campus map with building markers and a voice command button
repo: https://github.com/aabood17/AuraStride
order: 1
---

## The problem

For a visually impaired student, a university campus is full of obstacles: finding the right building, knowing where to turn, and avoiding people, bikes and benches along the way. General map apps don't know campus paths, don't describe the surroundings, and depend on a screen.

AuraStride turns the phone into a guide that **sees** through the camera and **speaks** directions, so the student can walk the campus hands-free.

## What I built

AuraStride was a team graduation project. My parts were:

- **Object detection module:** on-device YOLOv5 running with TensorFlow Lite on the live camera feed, announcing nearby obstacles through text-to-speech.
- **Campus navigation:** GPS positioning, Google Maps and step-by-step voice directions to campus buildings, controlled by speech commands.
- **Testing:** field-tested the app in real-world conditions on campus, and tested and debugged the detection and navigation code.

## Design choices

- **Accessibility first:** the main flows work by voice, so the student doesn't need to look at the screen.
- **On-device inference:** detection runs on the phone itself, with no round trip to a server, so alerts come in real time.
