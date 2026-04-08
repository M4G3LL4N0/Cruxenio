export type Move = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  situation: string;
  action_steps: string[];
  why_it_works: string | null;
  when_not_to_use: string | null;
  tags: string[];
  is_featured: boolean;
  status: 'draft' | 'published';
  created_at: string;
};
