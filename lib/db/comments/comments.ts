import { getSupabase } from "@/lib/db/supabase";

export const COMMENTS_TABLE_NAME = "comments";

interface CommentInsertRow {
  id: string;
}

export const insertComment = async (message: string): Promise<CommentInsertRow> => {
  const { data, error } = await getSupabase()
    .from(COMMENTS_TABLE_NAME)
    .insert({ message })
    .select("id")
    .single();

  if (error || !data) {
    throw new Error("Unable to save feedback.");
  }

  return { id: (data as CommentInsertRow).id };
};
