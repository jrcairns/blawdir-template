import {
    PlaceCardAvatar,
    PlaceCardDescription,
    PlaceCardRating,
    PlaceCardTitle
} from "@/components/place-card";
import { cn } from "@/lib/utils";
import { Globe, Phone } from "lucide-react";

interface Place {
    name: string;
    photo?: { url: string };
    rating: number;
    user_ratings_total: number;
    formatted_address: string;
    formatted_phone_number?: string;
    website?: string;
    reviews?: Array<{ text: string; author_name: string }>;
    isBoosted?: boolean;
}

interface PlaceListProps {
    initialPlaces: Place[];
}

export function PlaceList({ initialPlaces }: PlaceListProps) {
    return (
        <div className="divide-y">
            {initialPlaces.map((place, index) => (
                <div key={index} className={cn("py-8", place.isBoosted ? "bg-background" : "")}>
                    <div className="grid grid-cols-4 lg:divide-x gap-4 lg:gap-0">
                        <div className="col-span-4 lg:col-span-2 lg:pr-8 grid gap-4">
                            <div className="flex">
                                <PlaceCardAvatar
                                    photoUrl={place.photo?.url}
                                    name={place.name}
                                    className="mr-4 h-24 w-24 rounded-none object-cover"
                                />
                                <div>
                                    <PlaceCardTitle className="text-balance">{place.name}</PlaceCardTitle>
                                    <PlaceCardDescription>{place.formatted_address}</PlaceCardDescription>
                                </div>
                            </div>
                            <PlaceCardDescription>{place.formatted_address}</PlaceCardDescription>
                        </div>
                        <div className="col-span-4 sm:col-span-2 lg:col-span-1 lg:pl-8">
                            <PlaceCardRating rating={place.rating} reviewCount={place.user_ratings_total} />
                            {/* <PlaceCardBadges className="mb-4">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    <Zap className="w-3 h-3 mr-1" /> Popular Now
                                </Badge>
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    <MessageCircle className="w-3 h-3 mr-1" /> Quick Responses
                                </Badge>
                            </PlaceCardBadges> */}
                        </div>
                        <div className="col-span-4 sm:col-span-2 lg:col-span-1 lg:pl-8">
                            <div className="space-y-2">
                                {place.formatted_phone_number && (
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm">{place.formatted_phone_number}</span>
                                    </div>
                                )}
                                {place.website && (
                                    <div className="flex items-center space-x-2">
                                        <Globe className="w-4 h-4 text-gray-500" />
                                        <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                            Visit website
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {place.isBoosted && place.reviews && place.reviews.length > 0 && (
                        <>
                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Featured Review</h4>
                                <p className="text-sm italic max-w-[60ch]">&apos;{place.reviews[0].text}&apos;</p>
                                <p className="text-sm text-gray-500 mt-1">- {place.reviews[0].author_name}</p>
                            </div>
                            <p className="text-sm text-green-600 font-medium">
                                This location has been reviewed by <span className="font-bold">{place.user_ratings_total} customers</span>.
                            </p>
                        </>
                    )}
                    {/* <PlaceCard className="border-none shadow-none grid grid-cols-3">
                        <PlaceCardHeader className="p-0 col-span-2">
                            <div className="flex">
                                <PlaceCardAvatar
                                    photoUrl={place.photo?.url}
                                    name={place.name}
                                    className="mr-4 h-24 w-24 rounded-none object-cover"
                                />
                                <div>
                                    <PlaceCardTitle>{place.name}</PlaceCardTitle>
                                    <PlaceCardDescription>{place.formatted_address}</PlaceCardDescription>
                                </div>
                            </div>
                            <PlaceCardDescription>{place.formatted_address}</PlaceCardDescription>
                            {place.isBoosted && (
                                <PlaceCardActions>
                                    <Button variant="outline" size="icon">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline">Message</Button>
                                    <Button>Book Now</Button>
                                </PlaceCardActions>
                            )}
                        </PlaceCardHeader>
                        <PlaceCardContent className="p-0 pt-6">
                            <PlaceCardRating rating={place.rating} reviewCount={place.user_ratings_total} className="mb-4" />
                            <PlaceCardBadges className="mb-4">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    <Zap className="w-3 h-3 mr-1" /> Popular Now
                                </Badge>
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    <MessageCircle className="w-3 h-3 mr-1" /> Quick Responses
                                </Badge>
                            </PlaceCardBadges>
                            <div className="space-y-2">
                                {place.formatted_phone_number && (
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm">{place.formatted_phone_number}</span>
                                    </div>
                                )}
                                {place.website && (
                                    <div className="flex items-center space-x-2">
                                        <Globe className="w-4 h-4 text-gray-500" />
                                        <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                            Visit website
                                        </a>
                                    </div>
                                )}
                            </div>
                        </PlaceCardContent>
                    </PlaceCard>
                    {place.isBoosted && place.reviews && place.reviews.length > 0 && (
                        <>
                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Featured Review</h4>
                                <p className="text-sm italic">"{place.reviews[0].text}"</p>
                                <p className="text-sm text-gray-500 mt-1">- {place.reviews[0].author_name}</p>
                            </div>
                            <p className="text-sm text-green-600 font-medium">
                                This location has been reviewed by <span className="font-bold">{place.user_ratings_total} customers</span>.
                            </p>
                        </>
                    )} */}
                </div>
            ))}
        </div>
    )
}