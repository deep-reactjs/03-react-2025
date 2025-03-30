import React from "react";
import SectionHeading from "./SectionHeading";
import { IoAdd, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Button from "./Button";

const SongsTable = ({ text, highlightedText, data, showViewAll = true }) => {
  const tableColumns = ["", "", "Release Date", "Album", "Time"];
  return (
    <div className="">
      <SectionHeading text={text} highlightedText={highlightedText} />
      <div className="w-full">
        <table className="w-full border-separate table-auto border-spacing-y-4">
          <thead className="hidden md:table-header-group">
            {tableColumns?.map((heading) => (
              <th
                key={heading}
                className="text-base md:text-xl font-normal text-white"
              >
                {heading}
              </th>
            ))}
          </thead>
          <tbody className="space-y-4">
            {data.map((song) => (
              <tr key={song.rank} className="bg-stone-800">
                <td className="text-lg md:text-2xl font-semibold text-white">
                  {song.rank}
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded-md h-14 w-14"
                      src={song.image || "https://picsum.photos/56/56"}
                      alt={`song-${song.rank}`}
                    />
                    <div className="text-left">
                      <h4 className="text-base md:text-xl font-semibold">
                        {song.title}
                      </h4>
                      <p className="text-xs font-light">{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell">{song.date}</td>
                <td className="hidden md:table-cell">{song.song}</td>
                <td>
                  <div className="space-x-3.5">
                    <button className="text-primary-400 group">
                      <IoHeartOutline className="block group-hover:hidden" />
                      <IoHeartSharp className="hidden group-hover:block" />
                    </button>
                    <span>{song.duration}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showViewAll && (
          <Button
            className="mx-auto"
            size="small"
            variant="primary"
            type="outline"
            leftIcon={<IoAdd className="size-5" />}
          >
            View All
          </Button>
        )}
      </div>
    </div>
  );
};

export default SongsTable;
