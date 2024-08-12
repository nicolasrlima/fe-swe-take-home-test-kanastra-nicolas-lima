import type { Thumbnail } from "@/types/global";
import { describe, expect, it } from "vitest";
import { getThumbnailUrl } from "../strings";

describe("string utils", () => {
  it("should return the correct thumbnail url", () => {
    const thumbnail = {
      extension: "jpg",
      path: "http://example.com/image",
    } satisfies Thumbnail;

    expect(getThumbnailUrl(thumbnail)).toBe("http://example.com/image.jpg");
  });
});
