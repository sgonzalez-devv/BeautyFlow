import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 p-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="grid gap-0.5 text-xs">
          <div className="font-medium">Jane Parker</div>
          <div className="text-muted-foreground">jane@example.com</div>
        </div>
      </div>
    </div>
  )
}

