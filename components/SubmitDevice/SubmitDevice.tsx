import Form from "next/form";
import Link from "next/link";
import insertDevice from "@/actions/insertDevice";
import { FaLongArrowAltRight } from "react-icons/fa";
import SubmitButton from "./SubmitButton";

export default function SubmitDevice() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
            Can It Run DOOM?
          </p>

          <h1 className="text-4xl font-bold">Test your device</h1>

          <p className="mt-3 text-zinc-400">
            Enter your hardware specs to see if your device can run DOOM.
          </p>
        </div>

        <Form action={insertDevice} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
              Device name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Ex. Dyson Vacuum"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="clockspeed"
              className="mb-2 block text-sm text-zinc-300"
            >
              CPU clock speed
            </label>

            <div className="relative">
              <input
                id="clockspeed"
                name="clockspeed"
                type="number"
                min="0"
                required
                placeholder="35"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 pr-16 outline-none focus:border-zinc-600"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
                MHz
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="ram" className="mb-2 block text-sm text-zinc-300">
              RAM
            </label>

            <div className="relative">
              <input
                id="ram"
                name="ram"
                type="number"
                min="0"
                required
                placeholder="4"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 pr-14 outline-none focus:border-zinc-600"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
                MB
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="storage"
              className="mb-2 block text-sm text-zinc-300"
            >
              Storage
            </label>

            <div className="relative">
              <input
                id="storage"
                name="storage"
                type="number"
                min="0"
                required
                placeholder="12"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 pr-14 outline-none focus:border-zinc-600"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
                MB
              </span>
            </div>
          </div>

          <SubmitButton />
        </Form>

        <div className="mt-6 text-center">
          <Link
            href="/devices"
            className="text-sm text-zinc-400 transition hover:text-white flex gap-2 justify-center items-center"
          >
            View tested devices <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
