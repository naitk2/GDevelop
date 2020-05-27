// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdPreviewExportOptions {
  constructor(project: gdProject, outputPath: string): void;
  setLayoutName(layoutName: string): gdPreviewExportOptions;
  setExternalLayoutName(externalLayoutName: string): gdPreviewExportOptions;
  setIncludeFileHash(includeFile: string, hash: number): gdPreviewExportOptions;
  setProjectDataOnlyExport(enable: boolean): gdPreviewExportOptions;
  delete(): void;
  ptr: number;
};