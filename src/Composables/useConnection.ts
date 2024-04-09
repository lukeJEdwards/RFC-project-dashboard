import { computed } from "vue";
import { connection } from "@/types/enums";

export function useConnection() {
  const iconColor = computed(() => {
    switch (status.value) {
      case connection.connected:
        return "#27B973";
      case connection.connecting:
        return "#EFA22F";
      case connection.disconnected:
        return "#E33B32";
    }
  });

  return iconColor;
}
