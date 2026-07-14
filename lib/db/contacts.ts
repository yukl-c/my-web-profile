import { getSupabase } from "@/lib/db/supabase";

export const CONTACTS_TABLE_NAME = "contacts";

interface ContactInsertRow {
  id: string;
}

export const insertContact = async (message: string): Promise<ContactInsertRow> => {
  const { data, error } = await getSupabase()
    .from(CONTACTS_TABLE_NAME)
    .insert({ message })
    .select("id")
    .single();

  if (error || !data) {
    throw new Error("Unable to save feedback.");
  }

  return { id: (data as ContactInsertRow).id };
};
