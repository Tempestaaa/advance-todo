import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <InputGroup>
      <InputGroupInput placeholder='Type "/" to search' />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
