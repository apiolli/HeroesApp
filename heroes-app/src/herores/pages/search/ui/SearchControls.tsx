import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, Search } from "lucide-react";
import { useRef } from "react";
import { useSearchParams } from "react-router";

export const SearchControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const activeAccordion = searchParams.get("active-accordion") ?? "";
  const selectedStrength = searchParams.get("strength") ?? "0";

  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value ?? "";
      setQueryParams("name", value);
    }
  };

  const filters = [
    {
      name: "Team",
      options: [
        { label: "Select a team", value: null },
        { label: "Justice League", value: "liga de la justicia" },
        { label: "Avengers", value: "vengadores" },
      ],
    },
    {
      name: "Category",
      options: [
        { label: "Select a category", value: null },
        { label: "Hero", value: "hero" },
        { label: "Villain", value: "villain" },
      ],
    },
    {
      name: "Universe",
      options: [
        { label: "Select an universe", value: null },
        { label: "DC", value: "dc" },
        { label: "Marvel", value: "marvel" },
      ],
    },
    {
      name: "Status",
      options: [
        { label: "Select a status", value: null },
        { label: "Active", value: "active" },
        { label: "Deceased", value: "deceased" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            ref={inputRef}
            placeholder="Search heroes, villains, powers, teams..."
            className="pl-12 h-12 text-lg bg-white"
            onKeyDown={handleKeyDown}
            defaultValue={searchParams.get("name") ?? ""}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant={
              activeAccordion === "advance-filters" ? "default" : "outline"
            }
            className="h-12"
            onClick={() => {
              if (activeAccordion === "advance-filters") {
                setQueryParams("active-accordion", "");
                return;
              }

              setQueryParams("active-accordion", "advance-filters");
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Accordion value={[activeAccordion]}>
        <AccordionItem value="advance-filters">
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <Button variant="ghost">Clear All</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filters.map((filter) => {
                  // const currentValue =
                  //   searchParams.get(filter.name.toLowerCase()) ??
                  //   filter.options[0].label;

                  return (
                    <div className="space-y-2" key={filter.name}>
                      <label className="text-sm font-medium">
                        {filter.name}
                      </label>
                      <Select
                        items={filter.options}
                        value={
                          searchParams.get(filter.name.toLowerCase()) ??
                          filter.options[0].label
                        }
                        onValueChange={(value) => {
                          if (!value) {
                            setSearchParams((prev) => {
                              prev.delete(filter.name.toLowerCase());
                              return prev;
                            });
                            return;
                          }

                          setQueryParams(
                            filter.name.toLocaleLowerCase(),
                            value,
                          );
                        }}
                      >
                        <SelectTrigger className="w-full max-w-52 my-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {filter.options.map((fil) => (
                              <SelectItem key={fil.value} value={fil.value}>
                                {fil.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  );
                })}
              </div>

              {/* Slider*/}
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Minimum Strength: {selectedStrength}/10
                </label>
                <Slider
                  defaultValue={[+selectedStrength]}
                  onValueChange={(value) =>
                    setQueryParams("strength", value.toString())
                  }
                  max={10}
                  min={1}
                  className={"mt-4"}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
