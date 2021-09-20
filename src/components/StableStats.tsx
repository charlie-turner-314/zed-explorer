import React from "react";

interface Props {
  stable_stats?: {
    account_type?: string;
    career?: {
      first: number;
      second: number;
      third: number;
    };
    public_address?: string;
    stable_avatar_urls?: {
      original?: string;
      thumb?: string;
    };
    stable_description?: string;
    stable_name?: string;
    thoroughbreds?: number;
    win_rate?: number;
    // other props
    [x: string]: any;
  };
  [x: string]: any;
}

const StableStats = (props: Props) => {};

export default StableStats;
