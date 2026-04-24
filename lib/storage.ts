import { supabase } from "./supabase";

export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;
    
    // Get Public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

export const deleteFile = async (bucket: string, path: string) => {
  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) {
    console.error("Error deleting file:", error);
    return false;
  }
  return true;
};
