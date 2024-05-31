import { classes } from "@/constants";

interface GetClassEventParams {
  slug: string;
}
export async function getClassEvent(params: GetClassEventParams) {
  const { slug } = params;
  try {
    const res = classes.find((classEvent) => classEvent.slug === slug);

    if (!res) {
        throw new Error(`Class event with slug not found`);
      }

    return res;
  } catch (error) {
    console.error(error,"Error finding class event");
    throw error
  }
}
