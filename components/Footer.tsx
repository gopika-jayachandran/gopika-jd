import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const getRepoStats = async (): Promise<RepoStats | null> => {
        const repoPath = process.env.NEXT_PUBLIC_GITHUB_REPO;

        if (!repoPath) return null;

        try {
            const response = await fetch(
                `https://api.github.com/repos/${repoPath}`,
                {
                    next: {
                        revalidate: 60 * 60, // 1 hour
                    },
                },
            );

            if (!response.ok) return null;

            const { stargazers_count, forks_count } =
                (await response.json()) as RepoStats;

            return { stargazers_count, forks_count };
        } catch {
            return null;
        }
    };

    const repoStats = await getRepoStats();

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href={GENERAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design &amp; built by Gopika J D
                        {repoStats && (
                            <div className="flex items-center justify-center gap-5 pt-1">
                                <span className="flex items-center gap-2">
                                    <Star size={18} /> {repoStats.stargazers_count}
                                </span>
                                <span className="flex items-center gap-2">
                                    <GitFork size={18} /> {repoStats.forks_count}
                                </span>
                            </div>
                        )}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
