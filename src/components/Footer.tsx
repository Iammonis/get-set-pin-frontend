"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export default function Footer() {
  return (
    <footer className={cn("w-full border-t bg-gray-100 py-8 md:py-12")}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <Typography type="h3" className="font-bold">
                Get Set Pin
              </Typography>
            </div>

            <Typography className="text-sm text-muted-foreground">
              The Professional’s Choice for Smarter Pins.
            </Typography>
            <div className="flex gap-4">
              {[
                { name: "Twitter", href: "#", icon: <Twitter /> },
                { name: "Facebook", href: "#", icon: <Facebook /> },
                { name: "Instagram", href: "#", icon: <Instagram /> },
                { name: "Linkedin", href: "#", icon: <Linkedin /> },
              ].map((socialMedia, i) => (
                <Link
                  target="_blank"
                  key={i}
                  href={socialMedia?.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {socialMedia?.icon}
                  <span className="sr-only">{socialMedia.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <FooterColumn
            title="Product"
            columnsData={[
              { name: "Features", href: "#" },
              { name: "Pricing", href: "#" },
              { name: "Integrations", href: "#" },
              { name: "Changelog", href: "#" },
            ]}
          />
          <FooterColumn
            title="Resources"
            columnsData={[
              { name: "Documentation", href: "#" },
              { name: "Guides", href: "#" },
              { name: "Support", href: "#" },
              { name: "API", href: "#" },
            ]}
          />
          <FooterColumn
            title="Company"
            columnsData={[
              { name: "About", href: "#" },
              { name: "Blog", href: "#" },
              { name: "Careers", href: "#" },
              { name: "Contact", href: "#" },
            ]}
          />
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <Typography className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} StreamLine. All rights reserved.
          </Typography>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
              { name: "Cookie Policy", href: "#" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item?.href}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                {item?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

interface ColumnItem {
  name: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  columnsData: ColumnItem[];
}

function FooterColumn({ title, columnsData }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <Typography type="h4" className="text-sm font-medium">
        {title}
      </Typography>
      <ul className="space-y-2 text-sm">
        {columnsData.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
