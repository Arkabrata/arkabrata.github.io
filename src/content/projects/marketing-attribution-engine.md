---
title: "Marketing Attribution Engine"
description: "Marketing Mix Models and Shapley-value attribution informing ₹90 Cr in annual media spend, with audience pipelines integrated into Meta and Google Ads."
order: 6
tags: ["Marketing Science", "Attribution", "MMM", "Ads APIs"]
repo: "#"
---

## Problem
With ₹90 Cr in annual marketing spend across paid and organic channels, budget decisions needed channel-level contribution measurement rather than last-click reporting — and audience targeting needed to be driven by models, not manual list building.

## Method
The engine combines Marketing Mix Models for channel-level contribution with Shapley-value attribution for granular credit assignment across touchpoints. Regression-based price elasticity models complement the stack for markdown and assortment decisions.

## System / Workflow
Campaign, spend, and outcome data flow from marketing platforms into BigQuery batch pipelines. Attribution and MMM outputs feed budget reallocation reviews, while audience-generation pipelines push model-built segments directly to Meta and Google Ads APIs for activation.

## Impact
The attribution stack directly informed budget reallocation against ₹90 Cr in annual spend, and the audience pipelines contributed to a 15–30% ROAS improvement across paid channels.

## Future Research Direction
Future work includes causal uplift modeling, geo-experiment calibration of MMM estimates, and automated budget optimization loops that act on attribution outputs.
