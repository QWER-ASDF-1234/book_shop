import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Join = () => {
  return (
    <div className="m-auto flex w-[400px] flex-col gap-4 rounded-md border-2 border-solid p-3 dark:border-zinc-500">
      <div>
        <Label>Email</Label>
        <Input type="email" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" />
      </div>
      <div>
        <Label>Confirm Password</Label>
        <Input type="password" />
      </div>
      <div>
        <Label>Name</Label>
        <Input />
      </div>
      <div>
        <Label>Tel</Label>
        <div className="flex gap-3">
          <Input />-<Input />-<Input />
        </div>
      </div>
      <div>
        <Label>Address</Label>
        <div className="mb-1 flex gap-2">
          <Input /> <Button>검색</Button>
        </div>
        <Input />
      </div>
      <Button>검색</Button>
    </div>
  );
};

export default Join;
