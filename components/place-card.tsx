import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import * as React from "react"

const PlaceCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { isBoosted?: boolean }
>(({ className, isBoosted, ...props }, ref) => (
    <Card
        ref={ref}
        className={cn(className, isBoosted ? "border-blue-500" : "")}
        {...props}
    />
))
PlaceCard.displayName = "PlaceCard"

const PlaceCardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <CardHeader ref={ref} className={cn("flex items-start justify-between", className)} {...props} />
))
PlaceCardHeader.displayName = "PlaceCardHeader"

const PlaceCardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-xl font-semibold", className)} {...props} />
))
PlaceCardTitle.displayName = "PlaceCardTitle"

const PlaceCardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
))
PlaceCardDescription.displayName = "PlaceCardDescription"

const PlaceCardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <CardContent ref={ref} className={cn("", className)} {...props} />
))
PlaceCardContent.displayName = "PlaceCardContent"

const PlaceCardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <CardFooter ref={ref} className={cn("", className)} {...props} />
))
PlaceCardFooter.displayName = "PlaceCardFooter"

const PlaceCardAvatar = React.forwardRef<
    React.ElementRef<typeof Avatar>,
    React.ComponentPropsWithoutRef<typeof Avatar> & { photoUrl?: string; name: string }
>(({ photoUrl, name, ...props }, ref) => (
    <Avatar ref={ref} className="h-16 w-16" {...props}>
        <AvatarImage className="object-cover h-full w-full object-center" src={photoUrl || "/placeholder.svg?height=64&width=64"} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
))
PlaceCardAvatar.displayName = "PlaceCardAvatar"

const PlaceCardRating = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement> & { rating: number; reviewCount: number }
>(({ rating, reviewCount, className, ...props }, ref) => (
    <span ref={ref} className={cn("flex items-center space-x-2", className)} {...props}>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {rating?.toFixed(1)} Rating
        </Badge>
        <span className="text-gray-600">{reviewCount} reviews</span>
    </span>
))
PlaceCardRating.displayName = "PlaceCardRating"

const PlaceCardBadges = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex space-x-2", className)} {...props} />
))
PlaceCardBadges.displayName = "PlaceCardBadges"

const PlaceCardActions = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center space-x-2", className)} {...props} />
))
PlaceCardActions.displayName = "PlaceCardActions"

export {
    PlaceCard, PlaceCardActions, PlaceCardAvatar, PlaceCardBadges, PlaceCardContent, PlaceCardDescription, PlaceCardFooter, PlaceCardHeader, PlaceCardRating, PlaceCardTitle
}
