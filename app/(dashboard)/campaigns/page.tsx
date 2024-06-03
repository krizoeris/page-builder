"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/dashboard/PageTitle";
import CampaignsCard from "@/components/campaigns/CampaignsCard";

type CampaignListProps = {
  campaigns: Global.Campaign.Campaign[];
};

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  if (campaigns.length > 0) {
    return (
      <>
        <Card className="h-screen p-10 flex flex-col items-center gap-4 bg-background">
          {campaigns.map((campaign) => (
            <CampaignsCard key={campaign.id} campaign={campaign} />
          ))}
        </Card>
      </>
    );
  } else {
    return (
      <Card className="h-full p-10 flex flex-col justify-center items-center gap-4 bg-background">
        <div className="w-full h-full flex items-center justify-center border border-dashed border-muted-foreground rounded-md">
          <div className="w-[520px] flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl text-neutral-700 font-semibold">
              Welcome to Verthem! 👋🏼
            </h3>
            <p className="text-muted-foreground">
              Start crafting a visually appealing and high-converting page
              today. Our intuitive builder lets you drag, drop, and customize
              every element to match your marketing needs!
            </p>
            <Button className="flex gap-2 bg-verthem-900 hover:bg-verthem-700 hover:transition-all text-base text-slate-900 font-medium">
              Start Building Now
            </Button>
          </div>
        </div>
      </Card>
    );
  }
};

const CampaignsPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Global.Campaign.Campaign[]>([]);
  const subText: string = "Display all related campaigns here.";

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("/api/getCampaigns");
        const result = await response.json();
        setCampaigns(result);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <section className="h-full flex flex-col gap-4">
      <PageTitle subText={subText} />
      <div className="h-full flex-grow overflow-y-scroll">
        <CampaignList campaigns={campaigns} />
      </div>
    </section>
  );
};

export default CampaignsPage;