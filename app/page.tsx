// @ts-nocheck
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceList } from '@/components/place-list';

// export const revalidate = 0;

interface Place {
  name: string;
  photo?: {
    url: string;
  };
  rating: number;
  user_ratings_total: number;
  formatted_address: string;
  formatted_phone_number?: string;
  website?: string;
  isBoosted?: boolean;
  reviews?: Array<{
    text: string;
    author_name: string;
  }>;
}

interface Page {
  logo: {
    url: string;
  };
  navigation: {
    links: {
      label: string;
      url: string;
    }[];
  };
  hero: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
  cta: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  footer: {
    description: string;
    links: {
      label: string;
      url: string;
    }[];
  };
}

interface LoadResult {
  results: Place[];
  query: string;
  page: Page
}

function titleCase(str: string): string {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function load(): Promise<LoadResult | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${process.env.NEXT_PUBLIC_PROJECT_ID}`)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Failed to fetch data:", error)
    return null
  }
}

export default function Home() {
  // const data = await load();
  // const page = data?.page || {};
  // const places = data?.results || [];
  // const query = data?.query || "";

  // console.log(data)

  return <div>hello world</div>

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {page.logo && page.navigation && (
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              {page.logo.url && (
                <div className="h-8 w-auto relative">
                  {/* Replace <img> with <Image> */}
                  <Image src={page.logo.url} alt="Logo" width={32} height={32} className="h-full w-auto" />
                </div>
              )}
              {page.navigation.links && page.navigation.links.length > 0 && (
                <nav>
                  <ul className="flex space-x-4">
                    {page.navigation.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url} className="text-gray-600 hover:text-gray-900">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </header>
      )}

      {/* Hero Section */}
      {page.hero && (
        <section className="text-white relative">
          <Image
            src={places.find((place) => place?.isBoosted)?.photo?.url || page.hero.image.url}
            alt="Hero"
            width={600}
            height={400}
            className="rounded-lg absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-950/80"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center relative">
            <div>
              <h1 className="text-2xl lg:text-3xl mb-4">{page.hero.title}</h1>
              <p className="mb-8">{page.hero.description}</p>
              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Results List Section */}
      {places.length > 0 && (
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-8">{titleCase(query)}</h2>
            <PlaceList initialPlaces={places} />
          </div>
        </main>
      )}

      {/* CTA Section */}
      {page.cta && (
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="w-1/2 pr-8">
              <h2 className="text-3xl font-bold mb-4">{page.cta.title}</h2>
              <p className="text-xl mb-8">{page.cta.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Sign Up Now
              </button>
            </div>
            {page.cta.image && (
              <div className="w-1/2">
                <Image src={page.cta.image.url} alt="CTA" width={600} height={400} className="rounded-lg" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {page.faqs && page.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {page.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {page.footer && (
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {page.logo && (
                  <Image src={page.logo.url} alt="Logo" width={120} height={40} className="mb-4" />
                )}
                <p className="text-gray-300">{page.footer.description}</p>
              </div>
              {page.footer.links && page.footer.links.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    {page.footer.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url} className="text-gray-300 hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-300">&copy; 2023 Your Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
