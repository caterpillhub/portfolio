
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { EducationSection } from '@/components/EducationSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ContactSection } from '@/components/ContactSection'
import { Scene3D } from '@/components/Scene3D'
import { BottomNavigation } from '@/components/BottomNavigation'

const Index = () => {
  return (
    <div className="bg-portfolio-dark text-portfolio-silver min-h-screen relative overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
