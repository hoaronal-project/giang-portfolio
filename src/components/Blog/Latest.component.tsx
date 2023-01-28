import Image from 'next/image';
import Link from 'next/link';

import { Pill } from '~/components';

import type { FrontMatter } from '~/types';

interface LatestProps {
	frontmatter: FrontMatter;
}

export function Latest({ frontmatter }: LatestProps): JSX.Element {
	const ariaLabel = `Read blog post: ${frontmatter.title}`;
	const href = `/blog/${frontmatter.slug}`;

	return (
		<Link aria-label={ariaLabel} href={href} passHref>
			<a
				aria-label={ariaLabel}
				className="flex flex-col lg:flex-row mt-12 bg-white/75 dark:bg-gray-900/75 dark:border-gray-500 backdrop-filter backdrop-blur-sm rounded-2xl hover:shadow-xl cursor-pointer border-2 border-gray-100 transform motion-safe:hover:-translate-y-1 default-transition default-focus"
				href={href}>

			</a>
		</Link>
	);
}
