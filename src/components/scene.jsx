import { Canvas, useThree } from "@react-three/fiber"
import Model from "./robot"
import { Suspense } from "react"
import { useProgress, Html, OrbitControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="canvas-container ">
        {/* <ScrollControls damping={0.5} pages={3}> */}
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
            

          <Model />
          <OrbitControls/>
      </Suspense>
        {/* </ScrollControls> */}
    </Canvas>

  )
}