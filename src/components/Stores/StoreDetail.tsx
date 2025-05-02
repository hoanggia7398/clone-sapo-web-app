"use client";

import { Store } from "@/mockData/stores";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

interface StoreDetailProps {
  store: Store;
}

export default function StoreDetail({ store }: StoreDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{store.name}</h2>
          <p className="text-sm text-muted-foreground">Code: {store.code}</p>
        </div>
        <div>
          <Badge
            variant={store.status === "active" ? "default" : "destructive"}
            className={
              store.status === "active"
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : ""
            }
          >
            {store.status}
          </Badge>
          {store.isHeadquarters && (
            <Badge variant="secondary" className="ml-2">
              Headquarters
            </Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Address</p>
              <p>{store.address}</p>
              <p>{store.city}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Phone</p>
              <p>{store.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Email</p>
              <p>{store.email}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Manager</p>
              <p>{store.manager}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Opening Hours</p>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-sm">Weekdays:</p>
                <p className="text-sm">{store.openingHours.weekdays}</p>
                <p className="text-sm">Saturday:</p>
                <p className="text-sm">{store.openingHours.saturday}</p>
                <p className="text-sm">Sunday:</p>
                <p className="text-sm">{store.openingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-muted-foreground">
          Created on {formatDate(store.createdAt)}
        </p>
      </div>
    </div>
  );
}
