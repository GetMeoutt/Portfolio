import LinearProgress from "@mui/material/LinearProgress";

export default function Skillcard({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: number;
}) {
  return (
    <div className="w-[27vw] h-28 bg-neutral-600/15 rounded-2xl flex-row flex pr-4 gap-2 font-mono ">
      <div className="h-full w-[30%] flex items-center justify-center ">
        <h4> {title}</h4>
      </div>
      <div className="flex-col flex">
        <p className="mb-auto mt-5">{description}</p>
        <LinearProgress

          className="mb-5 border-none"
          variant="determinate"
          value={value}
          sx={{
            height: 10,
            width: "15vw",
            borderRadius: 4,
            color:"#818cf8",
            backgroundColor: "#ddd",
            "& .MuiLinearProgress-bar": {
                backgroundColor: "#818cf8",
            }
          }}
        />
      </div>
    </div>
  );
}
