"use client";
import EpisodeSwiper from "@/app/components/swiper/episode-swiper";
import { Episode, Season } from "@/types";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  tvId: number;
  seasons: Season[];
};

const SeriesEpisodes = ({ tvId, seasons }: Props) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentSeason, setCurrentSeason] = useState<number>(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/season/${currentSeason}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
          },
        }
      );

      const data = await res.json();
      setEpisodes(data.episodes);
    };

    fetchEpisodes();
  }, [tvId, currentSeason]);

  return (
    <div className=" my-[1rem]">
      <div className="flex items-center gap-[1rem] mb-[1rem]">
        <h2 className="lg:text-[1.7rem] text-[1.5rem] font-bold">Episodes</h2>

        <Select
          onValueChange={(value) => setCurrentSeason(Number(value))}
          defaultValue={currentSeason.toString()}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={`Season ${currentSeason}`} style={{fontSize: "1.1rem", fontWeight: "bold"}}/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {seasons.map((season, index) => (
                <SelectItem
                  key={index}
                  value={season.season_number.toString()}
                  style={{fontSize: "1.1rem", fontWeight: "bold"}}
                >
                  {season.name || `Season ${season.season_number}`}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <EpisodeSwiper episodes={episodes} />
      </div>
    </div>
  );
};

export default SeriesEpisodes;
