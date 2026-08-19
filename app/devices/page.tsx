import { supabase } from "@/lib/supabase";
import ShowDevices from "@/components/ShowDevices";
import { Device } from "@/types/devices";

async function getDevices() {
  const { data, error } = await supabase.from("devices").select("*");

  return {
    data: data as Device[],
    error,
  };
}

export default async function LandingPage() {
  // TODO: Handle getDevices possible failure
  let { data, error } = await getDevices();

  return <ShowDevices devices={data} />;
}
