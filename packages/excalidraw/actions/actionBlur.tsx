import { newElementWith } from "@excalidraw/element/mutateElement";

// TODO barnabasmolnar/editor-redesign
// TextAlignTopIcon, TextAlignBottomIcon,TextAlignMiddleIcon,
// ArrowHead icons
import { isBlurElement } from "@excalidraw/element/typeChecks";

import { CaptureUpdateAction } from "@excalidraw/element/store";

import { BlurRange } from "../components/Range";

import { t } from "../i18n";

import { RadioSelection } from "../components/RadioSelection";

import { FillHachureIcon } from "../components/icons";

import { register } from "./register";

import { changeProperty, getFormValue } from "./actionProperties";
import { useContext } from "react";
import { ExcalidrawPropsCustomOptionsContext } from "../types";

export const actionChangeBlur = register({
  name: "changeBlur",
  label: "labels.blur",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      elements: changeProperty(
        elements,
        appState,
        (el) => {
          if (!isBlurElement(el)) {
            return el;
          }

          return newElementWith(el, {
            blur: value,
          });
        },
        true,
      ),
      appState: { ...appState, currentItemBlur: value },
      captureUpdate: CaptureUpdateAction.IMMEDIATELY,
    };
  },
  PanelComponent: ({ updateData, app }) => (
    <BlurRange updateData={updateData} app={app} testId="blur" />
  ),
});

export const actionChangeBlurFilterType = register({
  name: "changeBlurFilterType",
  label: "labels.blurFilterType",
  trackEvent: false,
  perform: (elements, appState, value, app) => {
    return {
      elements: changeProperty(elements, appState, (el) => {
        if (!isBlurElement(el)) {
          return el;
        }

        return newElementWith(el, {
          filterType: value,
        });
      }),
      appState: { ...appState, currentItemFilterType: value },
      captureUpdate: CaptureUpdateAction.IMMEDIATELY,
    };
  },
  PanelComponent: ({ elements, appState, updateData, app }) => {
    const customOptions = useContext(ExcalidrawPropsCustomOptionsContext);

    return (
      <fieldset>
        <legend>{t("labels.blurFilterType")}</legend>
        {customOptions?.pickerRenders?.FilterTypeRadioSelection && (
          <customOptions.pickerRenders.FilterTypeRadioSelection
            type="button"
            options={[]}
            value={getFormValue(
              elements,
              app,
              (element) => {
                if (isBlurElement(element)) {
                  return element.filterType;
                }

                return null;
              },
              (element) => element.hasOwnProperty("filterType"),
              (hasSelection) =>
                hasSelection ? null : appState.currentItemFilterType,
            )}
            onClick={(value) => {
              updateData(value);
            }}
          />
        )}
      </fieldset>
    );
  },
});
