"use client";

import { GripVerticalIcon } from "lucide-react";
// react-resizable-panels v4 renamed: PanelGroup → Group, ResizeHandle → Separator
import {
  Group as PanelGroup,
  Panel,
  Separator as ResizeHandle,
} from "react-resizable-panels";

import { cn } from "./utils";

function ResizablePanelGroup({ className, ...props }: any) {
  return (
    <PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function ResizablePanel({ ...props }: any) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({ withHandle, className, ...props }: any) {
  return (
    <ResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border relative flex w-px items-center justify-center",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };