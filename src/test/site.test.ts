import { describe, it, expect } from "vitest";
import { whatsappLink, serviceMessage, buildRequestMessage } from "@/lib/site";

describe("whatsapp", () => {
  it("uses the official number", () => {
    expect(whatsappLink("oi")).toBe("https://wa.me/5521965650406?text=oi");
  });
  it("names the selected service", () => {
    expect(serviceMessage("Hidratação")).toContain("serviço de hidratação");
  });
  it("omits empty fields in request", () => {
    const m = buildRequestMessage({ pet: "Thor", tutor: " " });
    expect(m).toContain("Pet: Thor");
    expect(m).not.toContain("Tutor");
  });
});
