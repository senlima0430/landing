import React, { useRef, useMemo } from 'react'
import randomstring from 'randomstring'
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { Canvas, useFrame, extend } from 'react-three-fiber'

extend(meshline)

function Fatline({ curve, width, color, speed }) {
  const materialRef = useRef()

  useFrame(() => (materialRef.current.uniforms.dashOffset.value -= speed))

  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial
        attach="material"
        ref={materialRef}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={0.9}
      />
    </mesh>
  )
}

function Lines({ count, colors }) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const pos = new THREE.Vector3(
          10 - Math.random() * 20,
          10 - Math.random() * 20,
          10 - Math.random() * 20
        )
        const points = new Array(30)
          .fill()
          .map(() =>
            pos
              .add(
                new THREE.Vector3(
                  4 - Math.random() * 8,
                  4 - Math.random() * 8,
                  2 - Math.random() * 4
                )
              )
              .clone()
          )
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
        return {
          color: colors[parseInt(colors.length * Math.random())],
          width: Math.max(0.1, 0.5 * Math.random()),
          speed: Math.max(0.0001, 0.0005 * Math.random()),
          curve
        }
      }),
    [colors, count]
  )
  return lines.map((props) => (
    <Fatline key={randomstring.generate(5)} {...props} />
  ))
}

export default function LinesBackground() {
  return (
    <Canvas
      style={{ background: '#000000' }}
      camera={{ position: [0, 5, 10], fov: 75 }}
    >
      <Lines
        count={40}
        colors={[
          '#A2CCB6',
          '#FCEEB5',
          '#EE786E',
          '#e0feff',
          'lightpink',
          'lightblue'
        ]}
      />
    </Canvas>
  )
}
