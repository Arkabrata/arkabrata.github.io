---
title: "Customer Intelligence Platform"
description: "Churn, CLTV, propensity, and RFM segmentation models running in production batch pipelines, feeding CRM and campaign systems."
order: 7
tags: ["Customer Analytics", "Churn Modeling", "CLTV", "Segmentation"]
repo: "#"
---

## Problem
CRM and paid-media teams needed to know which customers were at risk, which were high value, and who to target for each campaign — signals that raw transaction data alone could not provide.

## Method
The platform runs churn, customer lifetime value (CLTV), and propensity models alongside RFM segmentation, using survival analysis and gradient-boosted classifiers over engineered behavioral features.

## System / Workflow
Production batch pipelines score the full customer base on schedule, writing predictions and segments to BigQuery. Outputs feed CRM journeys and paid-media audience pipelines automatically, so campaign targeting stays current without manual refreshes.

## Impact
The models power retention campaigns, win-back targeting, and paid-media audience selection in production, and supply the customer signals behind the 15–30% ROAS improvement achieved by the audience-generation pipelines.

## Future Research Direction
Future work includes uplift-based targeting (treating who to contact as a causal question), real-time propensity scoring, and unified customer embeddings shared across models.
