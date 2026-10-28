import { Metadata } from 'next';
import ServiceSubpage from '@/components/ServiceSubpage';
import { generatedSubpages, serviceParents } from '@/lib/services';

const parent = serviceParents['inbox-oracle'];

export const dynamicParams = false;

export function generateStaticParams() {
  return generatedSubpages(parent).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const label = parent.subpages.find((s) => s.slug === slug)?.label;
  return { title: `${label} | ${parent.name} | PMG B2B` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceSubpage parent={parent} slug={slug} />;
}
