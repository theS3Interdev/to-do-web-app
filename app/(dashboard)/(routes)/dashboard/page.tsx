import { Container } from "@/components/index";
import { Separator } from "@/components/ui/separator";
import { CreateToDo } from "@/components/common/create-to-do";
import { ReadToDo } from "@/components/common/read-to-do";

const DashboardPage = () => {
  return (
    <Container>
      <div className="mx-auto mt-5 max-w-5xl p-5">
        <CreateToDo />

        <Separator className="my-4" />

        <ReadToDo />
      </div>
    </Container>
  );
};

export default DashboardPage;
