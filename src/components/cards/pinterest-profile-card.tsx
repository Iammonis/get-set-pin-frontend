"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, Link2, Trash2, Dot, Circle } from "lucide-react";
import { PinterestProfile } from "@/hooks/use-linked-accounts";

// Define the expected props for this component
interface ConnectedAccountCardProps {
  account: PinterestProfile;
  handleSetDefault: (id: string) => void;
  handleRemoveAccount: (id: string) => void;
  isRemoving: boolean;
  isSettingDefault: boolean;
}

const PinterestProfileCard: React.FC<ConnectedAccountCardProps> = ({
  account,
  handleSetDefault,
  handleRemoveAccount,
  isRemoving,
  isSettingDefault,
}) => {
  return (
    <Card key={account.pinterestId}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={account?.profileImage} />
            <AvatarFallback>
              {account.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">@{account?.username}</CardTitle>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => handleSetDefault(account.pinterestId)}
              disabled={account.isDefault || isSettingDefault}
            >
              <Link2 className="mr-2 h-4 w-4" />
              {account?.isDefault ? "Default Account" : "Set as Default"}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleRemoveAccount(account.pinterestId)}
              className="text-red-600"
              disabled={isRemoving}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {isRemoving ? "Removing..." : "Remove"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="text-sm text-muted-foreground">
            Status:{" "}
            <Badge variant="outline">
              Connected <Circle className="text-green-400 bg-green-400 rounded-full" />
            </Badge>
          </div>
          {account.isDefault && <Badge variant="default">Default</Badge>}
        </div>
      </CardContent>
    </Card>
  );
};

export default PinterestProfileCard;
