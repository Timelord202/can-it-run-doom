import { supabase } from "@/lib/supabase";
import { FaCircleCheck, FaRegCircleXmark, FaComputer } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

const DOOM_REQUIREMENTS = {
  clockspeed: {
    value: 35,
    unit: "MHz",
  },
  ram: {
    value: 4,
    unit: "MB",
  },
  storage: {
    value: 12,
    unit: "MB",
  },
};

async function getDevices() {
  const devices = await supabase.from("devices").select("*");
  return devices;
}

export default async function LandingPage() {
  let { data: devices, error } = await getDevices();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="flex items-center gap-2 mb-5">
          <IoChevronBack />
          <p className="font-bold">Back</p>
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Tested Devices</h1>
          <p className="mt-2 text-zinc-400">What devices can run doom?</p>
        </div>

        <div className="space-y-4">
          {devices?.map((device) => {
            const cpuPass =
              device.clockSpeed >= DOOM_REQUIREMENTS.clockspeed.value;
            const ramPass = device.ram >= DOOM_REQUIREMENTS.ram.value;
            const storagePass =
              device.storage >= DOOM_REQUIREMENTS.storage.value;
            const canRun = cpuPass && ramPass && storagePass;

            return (
              <div
                key={device.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaComputer className="text-xl text-zinc-400" />

                    <h2 className="text-lg font-semibold">{device.name}</h2>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm font-medium ${
                      canRun ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {canRun ? <FaCircleCheck /> : <FaRegCircleXmark />}
                    {canRun ? "Can run DOOM" : "Cannot run DOOM"}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <Stat
                    name="CPU"
                    value={device.clockSpeed}
                    unit={DOOM_REQUIREMENTS.clockspeed.unit}
                    minimum={DOOM_REQUIREMENTS.clockspeed.value}
                    passed={cpuPass}
                  />

                  <Stat
                    name="RAM"
                    value={device.ram}
                    unit={DOOM_REQUIREMENTS.ram.unit}
                    minimum={DOOM_REQUIREMENTS.ram.value}
                    passed={ramPass}
                  />

                  <Stat
                    name="Storage"
                    value={`${device.storage} MB`}
                    unit={DOOM_REQUIREMENTS.storage.unit}
                    minimum={DOOM_REQUIREMENTS.storage.value}
                    passed={storagePass}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Stat({
  name,
  value,
  unit,
  minimum,
  passed,
}: {
  name: string;
  value: string;
  unit: string;
  minimum: number;
  passed: boolean;
}) {
  return (
    <div className="rounded-md bg-zinc-800 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">{name}</p>

        {passed ? (
          <FaCircleCheck className="text-green-400" />
        ) : (
          <FaRegCircleXmark className="text-red-400" />
        )}
      </div>

      <p className="mt-2 font-semibold">
        {value} {unit}
      </p>

      <p className="mt-1 text-xs text-zinc-500">
        Minimum: {minimum} {unit}
      </p>
    </div>
  );
}
