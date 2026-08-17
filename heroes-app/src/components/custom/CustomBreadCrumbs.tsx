import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { DotIcon } from "lucide-react";
import { Link } from "react-router";

interface BreadCrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadCrumbs?: BreadCrumb[];
}

export const CustomBreadCrumbs = ({ currentPage, breadCrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link to="/">Home</Link>} />
        </BreadcrumbItem>

        {breadCrumbs.map((bc) => (
          <div className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbSeparator>
                <DotIcon />
              </BreadcrumbSeparator>
              <BreadcrumbLink render={<Link to={bc.to}>{bc.label}</Link>} />
            </BreadcrumbItem>
          </div>
        ))}

        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold">{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
