import { saveAs } from "file-saver";
import toast from "react-hot-toast";

export async function downloadResume(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const toastId = toast.loading("Downloading resume...");

  try {
    const response = await fetch("/cv-rizky-nugraha.pdf");
    if (!response.ok) {
      throw new Error("Failed to fetch resume file");
    }
    const blob = await response.blob();
    saveAs(blob, "Resume_Rizky_Nugraha_Putra.pdf");
    toast.success("Resume downloaded successfully!", { id: toastId });
  } catch (error) {
    console.error("Direct blob download error, using fallback:", error);
    try {
      saveAs("/cv-rizky-nugraha.pdf", "Resume_Rizky_Nugraha_Putra.pdf");
      toast.success("Resume downloaded!", { id: toastId });
    } catch {
      window.open("/cv-rizky-nugraha.pdf", "_blank");
      toast.dismiss(toastId);
    }
  }
}
