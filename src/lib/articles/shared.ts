import { formatSpanishDate } from "@/lib/utils";

export type ArticleRecord = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  tags?: string[];
  status: "draft" | "published";
  created_at: string;
};

export function readableDate(record: ArticleRecord) {
  return formatSpanishDate(record.created_at);
}
