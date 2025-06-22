import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { SplineScene } from "@/components/global/spline";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <section className="relative flex w-full items-center justify-center h-[85vh]">
        <div className="flex h-full w-full max-w-7xl items-center">
          {/* Left content */}
          <div className="flex-1 px-6">
            <h1 className="max-w-4xl text-balance text-6xl font-medium md:text-7xl">
              Build and Ship 10x faster with Autoflow
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-xl">
              From idea to deployment in record time accelerate your projects
              effortlessly. The future of rapid development is here. Are you
              ready to ship at lightspeed?
            </p>
            <div className="mt-12 flex items-center gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14">
                <Link href="#">
                  <span className="text-nowrap">Get Started</span>
                </Link>
              </Button>
              <Link
                href="#"
                className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                  Start Free Trial
                </span>
              </Link>
            </div>
          </div>
          {/* Right content */}
          <div className="flex-1 h-[80vh]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <InfiniteMovingCards
        className="py-4"
        items={clients}
        direction="right"
        speed="slow"
      />
    </main>
  );
}
