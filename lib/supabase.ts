
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lubeapgnjpvlxidxfnhb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YmVhcGduanB2bHhpZHhmbmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNDAzMjAsImV4cCI6MjA4NTgxNjMyMH0.A6kV2LrklpeAmqoPLLI7zjhGuDlyK5WZ2_MIN8sMJ_M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper pour convertir un DataURL (base64) en Blob pour l'upload Supabase Storage
 */
export async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
  const res = await fetch(dataUrl);
  return await res.blob();
}
