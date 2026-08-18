import { supabase } from '@/lib/supabase';

async function getDevices() {
  const devices = await supabase.from('devices').select('*');
  return devices;
}

export default async function LandingPage() {
  let { data, error } = await getDevices();
  console.log(JSON.stringify(data));

  return (
    <h1 className="font-bold text-green-400">Test</h1>
  );
}
