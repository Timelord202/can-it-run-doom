'use server';
import { supabase } from '@/lib/supabase';

export default async function insertDevice(formData: FormData) {
    // TODO: Add validation with Zod
    const device = {
        storage: formData.get('storage'),
        ram: formData.get('ram'),
        clockspeed: formData.get('clockspeed'),
        name: formData.get('name'),
    };

    const { error } = await supabase.from('devices').insert(device);

    if (!error) {
        return {
            success: true,
            message: "Successfully added device!"
        };
    }
    return {
        success: false,
        message: "Failed to add device!"
    };
}