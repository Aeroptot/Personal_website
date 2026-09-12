# Website visible text

This file contains the text currently visible on the website, in page order.
Edit the text after each label, then ask Codex to sync `SITE_TEXT.md` back into
`index.html`. Keep section headings and field labels unchanged so each edit can
be mapped reliably.

Items marked **(automatic)** are calculated by the site and should not be edited
here.

Decorative symbols such as arrows and the expand/collapse `+` are not listed
individually because they are structural, not content.

---

## Browser tab

**Page title**

Mathematical Research and Modeling Portfolio | Max Zhang

## Accessibility

**Skip link**

Skip to content

---

# Global header and hero

## Header

**Brand**

Max Zhang

**Navigation: Research**

Research

**Navigation: Models**

Models

**Navigation: Problems**

Problems

**Navigation: Thinking**

Thinking

**Navigation: GitHub**

GitHub

## Hero

**Eyebrow**

Mathematical Research & Modeling Portfolio

**Name**

Max Zhang

**Introduction**

Have you ever wondered how mathematical models change when ideal assumptions
meet outliers, uncertainty, and unpredictable human behavior? This portfolio
collects my selected research, simulations, and problem-solving notes in
probability, stochastic processes, statistics, and applied modeling. Rather
than presenting mathematics only through final answers, I have included the
assumptions, failed approaches, parameter choices, and revisions that
reconstruct each piece of work.

**Word count label**

61 words **(automatic)**

## Section entry cards

**Card 01 title**

Research Papers

**Card 01 description**

In-depth summaries of my NCMC random-walk paper and HiMCM carbon-footprint model, each with the full PDF and key findings.

**Card 02 title**

Models & Simulations

**Card 02 description**

Two representative Minecraft machines I built, each shown through Question → Assumptions → Model → Test → Result → Limitation.

**Card 03 title**

Selected Problems

**Card 03 description**

Four multi-part Ross application problems, shown with full prompts and my approach from first attempt to final solution.

**Card 04 title**

How I Think Mathematically

**Card 04 description**

A short mathematical self-position.

---

# Part 1: Research Papers

## Section heading

**Kicker**

01 · Pinned research

**Heading**

Research Papers

**Section note**

Present each paper's key summary and its form as a compact model, with its full PDF available separately.

## Paper 1: NCMC

**Metadata**

NCMC 2026 · Max Zhang · 19 pages

**Title**

Memory, Repulsion, and Attraction: Phase Transitions in Non-Markovian Random
Walks on a Two-Dimensional Lattice

**Status label**

Featured research

**Methods**

- Non-Markovian random walk
- Monte Carlo simulation
- Nonlinear regression
- Parameter sensitivity

**Abstract**

This paper studies a non-Markovian random walk on a 100×100 two-dimensional
lattice in which the walker remembers past visits, avoids recently visited
neighborhoods, and can be drawn back toward the origin. The model combines an
exponentially decaying memory field, Logistic soft repulsion based on a 5×5
local memory intensity, and an optional central attraction. Across 10,000
baseline Monte Carlo trials, the pure repulsive walker escaped with probability
100% and a mean escape time of 722.69 steps, much faster than the roughly
2,500-3,000 steps of a classical simple random walk. Nonlinear regression gives
strong exponential scaling laws in the memory decay rate, repulsion threshold,
and Logistic steepness; increasing central attraction produces a sharp
exploration-return phase transition. The results provide numerical evidence that
memory and repulsion change the classical recurrence behavior of the
two-dimensional random walk.

**Core research question**

What happens to recurrence, transience, and escape time when a two-dimensional
random walker is given a decaying memory of past visits, a soft local repulsion
from recently visited regions, and a competing attraction back toward the
origin?

**Research question 1**

How does the memory decay rate affect escape efficiency, and is there an optimal
intermediate regime?

**Research question 2**

How sensitive is the walker to the repulsion threshold, and can a small change
cause a dramatic shift?

**Research question 3**

Does central attraction only slow escape, or can it qualitatively reverse the
walker's fate?

**Research question 4**

Is the memory-repulsion walker ultimately transient or recurrent?

**Main finding 1**

Memory-driven repulsion changes the walker's long-term behavior. Instead of
returning repeatedly as a classical two-dimensional walker does, it tends to
leave the finite lattice and escapes much faster than the memoryless case -
about 723 steps on average, compared with roughly 2,500-3,000 steps.

**Main finding 2**

Escape time is exponentially sensitive to the three model controls. Increasing
the Logistic steepness k makes escape faster; increasing the repulsion threshold
c or making memory fade faster (larger λ) makes escape take longer. All three
fitted relationships had R² above 0.98.

**Main finding 3**

Attraction strength creates a sharp phase transition. At low attraction strength
α, escape is fast. Beyond about α = 0.2, the pull back toward the origin becomes
strong enough that escape time grows explosively, suggesting a shift from
transient to recurrent behavior.

**Main finding 4**

Classical memoryless behavior requires extreme settings. It appears only with a
negative steepness k, which reverses repulsion into attraction; an extremely
high threshold c, which makes the walker ignore memory; or a very fast decay λ,
which erases past visits in a few steps.

**Button: primary**

View Full Paper

**Button: secondary**

View Code Appendix

**Figure 1 caption**

Figure 1 · 5×5 memory neighborhood and sample transition probabilities

**Figure 2 caption**

Figure 2 · Logistic repulsion for different steepness values k

**Research-to-model label**

Research-to-model summary

**Model summary: Question**

How do decaying memory and Logistic repulsion alter escape time and recurrence
on a two-dimensional lattice, and how does a central attraction change the
outcome?

**Model summary: Assumptions**

- The walker moves on a 100×100 square lattice with an absorbing boundary and
  starts at (50,50).
- A site's memory is the maximum exponentially decaying contribution from its
  past visits.
- Repulsion depends on total memory in a 5×5 neighborhood and is softened with
  a Logistic function.
- Central attraction depends on whether a move steps toward or away from the
  origin.

**Model summary: Model**

Composite transition weight = repulsion × attraction. Baseline parameters are
k = 1.5, c = 5.5, and λ = 0.04; attraction strength α is scanned from 0 to 0.5.

**Model summary: Test**

10,000 baseline simulations; 1,000 simulations per scanned parameter value;
nonlinear regression against k, c, and λ; and a 500,000-step infinite-plane run
to count returns to the origin.

**Model summary: Result**

Pure repulsion escaped 100% of the time with mean 722.69 steps and median 579,
well below the classical 2,500-3,000 steps. Increasing α drives a phase
transition: about 2,700 steps at α = 0.2, 7,800 at 0.3, 28,000 at 0.4, and
120,000 at 0.5.

**Model summary: Limitation**

The recurrence and transience claims are numerical rather than rigorous proofs,
and the findings are specific to the 2D square lattice, parameter ranges, and
max-based memory rule.

## Paper 2: HiMCM 2024

**Metadata**

HiMCM 2024 · Problem B · Team 15260 · 25 pages

**Title**

Carbon Footprint of High-Powered Computing: Forecasting, Renewable Transitions,
and Network Design

**Status label**

Competition model

**Methods**

- ARIMA forecasting
- Polynomial regression
- Carbon-intensity accounting
- Integer linear programming
- Simulated annealing
- Dijkstra routing

**Abstract**

HiMCM 2024 Problem B asked teams to quantify the environmental impact of
high-powered computing and propose practical mitigation strategies. This
solution models total carbon as operational plus infrastructure emissions. It
forecasts data-center and Bitcoin energy demand from historical data, combines
energy demand with source-specific carbon intensity, estimates construction
emissions, and predicts 339.66 Mt CO₂ by 2030, up from 221.68 Mt in 2024. A 100%
renewable scenario cuts operational carbon to under 10% and saves $7.32 billion,
but adds about 267,000 acres of land use. The team also optimizes data-center
placement with integer linear programming and simulated annealing, showing that
three connected data centers balance cost and latency while government
subsidies reduce the modeled carbon-emission index.

**Core research question**

How can we estimate the current and future carbon footprint of high-powered
computing, quantify the effects of renewable-energy adoption, and choose
data-center and network designs that reduce emissions without ignoring cost,
latency, or land use?

**Research question 1**

Estimate HPC carbon emissions across different energy sources and energy mixes.

**Research question 2**

Forecast how HPC energy use and emissions evolve by 2030.

**Research question 3**

Quantify the emissions, land, and cost effects of a full renewable-energy
transition.

**Research question 4**

Design a scalable network architecture and optimize data-center placement.

**Research question 5**

Develop practical recommendations and test one strategy in detail.

**Main finding 1**

2030 emissions rise sharply. Predicted HPC emissions reach 339.66 Mt CO₂ in
2030, compared with 221.68 Mt in 2024: an increase of 117.98 Mt, or 53.2%.

**Main finding 2**

Renewables help operations, not infrastructure. A 100% renewable scenario lowers
operational carbon to under 10% and saves $7.32 billion, but increases land use
by roughly 267,000 acres and leaves infrastructure emissions unchanged.

**Main finding 3**

Network design and subsidies matter. The optimal placement solution uses three
connected data centers to balance cost and latency, and increasing government
subsidies steadily lowers the modeled carbon-emission index.

**Button: primary**

View Full Paper

**Button: secondary**

View Model Summary

**Figure 1 caption**

Figure 1 · Predicted HPC carbon-footprint growth through 2030

**Figure 2 caption**

Figure 2 · Carbon-emission index versus the portion of government subsidies

**Research-to-model label**

Research-to-model summary

**Model summary: Question**

How large is the carbon footprint of high-powered computing, how will it change
by 2030, how much can renewable energy reduce it, and where should data centers
be placed to balance construction cost, latency, and emissions?

**Model summary: Assumptions**

- Data-center siting depends mainly on construction cost and latency.
- Infrastructure carbon intensity does not fall because of technological
  progress during the forecast.
- HPC energy demand focuses on data centers and Bitcoin cryptocurrency mining.
- Green building materials do not reduce construction emissions in the model.
- Network-related CO₂ changes come from traffic energy demand and the local
  energy mix.

**Model summary: Model**

Total carbon = operational + infrastructure. Operational carbon sums energy
demand by source × carbon intensity; ARIMA forecasts crypto energy, while
polynomial regression forecasts data-center energy and the global energy mix.
Infrastructure carbon uses C_inf = 90,035.2P. The network uses integer linear
programming, simulated annealing, and Dijkstra routing.

**Model summary: Test**

Forecasts were compared with historical data through 2024; network placement was
tested on the Amazon data-center graph; the cost-latency weights m₁ and m₂ were
varied; and renewable-energy and subsidy scenarios were simulated.

**Model summary: Result**

Emissions reach 339.66 Mt CO₂ in 2030, up 117.98 Mt from 2024. Full renewables
cut operational carbon to under 10% and save $7.32 billion while adding about
267,000 acres of land use. The best network solution uses three connected data
centers, and larger subsidies lower the carbon-emission index.

**Model summary: Limitation**

The model assumes infrastructure emissions are unchanged by technology, excludes
other HPC applications and region-specific policy, omits green-material effects,
and solves the NP-hard placement problem heuristically. Long-range forecasts
carry uncertainty.

---

# Part 2: Models & Simulations

## Section heading

**Kicker**

02 · Completed work

**Heading**

Models & Simulations

**Section note**

Two completed Minecraft machine systems, each shown through Question →
Assumptions → Model → Test → Result → Limitation.

## Machine 1: Sand Duper

**Model label**

Model 01 · Resource production

**Title**

432k/h End-Portal Sand Duper with Bulk Collection

**Question**

How can sand or concrete powder be duplicated continuously through the End
portal and collected into a dense, long-term storage system?

**Assumptions**

- A controlled in-water explosion can power a TNT duper without destroying the
  machine.
- Pistons can push sand into the End portal while duplicating another sand block
  at the original position.
- Hopper minecarts can collect material from the 5×5 obsidian platform in the
  End.
- Placing filled shulker boxes into ordinary chests creates much denser
  long-term storage.

**Model**

The overworld duper creates and ignites TNT rapidly in water; pistons duplicate
sand and push it into the End portal, while the explosions accelerate the
process. The bulk collector uses hopper minecarts, water channels, and a 1×1
accumulation point to fill shulker boxes, which are then sent to long-term chest
storage. Crucial variables are the piston/TNT rate and the
shulker-box-to-chest storage process.

**Test**

The machine was built from a community blueprint using Litematica. Because the
blueprint did not clearly show which containers had to be filled, an extension
was added to display container information, and the server was changed to allow
client-side access to game data so the build could be verified layer by layer.

**Result**

The completed system produces 432,000 sand or concrete-powder items per hour,
compacts the output into shulker boxes, and stores those boxes in chests. Sand
and concrete powder become effectively free resources, making the machine
highly efficient and easy to use.

**Limitation**

The system is difficult to repair if a component fails, and it depends on exact
reproduction of a community blueprint. Construction required extra client-side
tooling and server settings, so maintaining or replicating the machine is more
demanding than operating it.

**Link 1**

View sand duper flowchart

**Link 2**

Read full write-up

**Link 3**

Minecraft archive

## Machine 2: Trial Chamber

**Model label**

Model 02 · Integrated loot system

**Title**

Automated Trial Chamber Spawner and Loot System

**Question**

How can Trial Chamber spawner activation, player transport, vault-key use,
crafting, and sorting be interlocked into one continuous automated loot system?

**Assumptions**

- The amount of loot produced by a Trial spawner depends on the number of
  players present.
- Vault keys should be consumed at a controlled interval so the player always
  carries zero keys and none are wasted.
- Stackable and unstackable items require different sorting paths.
- An integrated system must keep spawner activation, player transport,
  crafting, sorting, and storage operating together.

**Model**

The Trial spawner cycle uses an ominous bottle and player presence to activate
spawns, kills mobs quickly, moves players between spawners, and transports loot
to storage. The vault cycle uses a timer to supply trial keys at fixed
intervals. The storage system automatically crafts iron, emeralds, and diamonds
into blocks, sorts stackable loot into chests, routes unstackable items to a
dedicated sorter, and disposes of the remainder. Crucial variables are player
count, key-timer interval, and sorting-system design.

**Test**

A timed minecart departure system was designed to send players one by one and to
stop them with lever-controlled rails. The system was expanded to support
multiple players. The sorting design came from an online blueprint and was
integrated with an optimized water channel to transport loot through the full
system.

**Result**

The completed Trial Chamber system is successful: every module is interlocked,
the full process runs as one system, stackable and unstackable loot are both
handled, and the machine is straightforward to operate. Multiple players can be
delivered to the spawners to improve output.

**Limitation**

Throughput is still restricted by the number of available players and by the
game rule limiting maximum mob spawns. Preventing outside mobs may require
emptying the entire loading area. The machine also required several optimization
iterations before all modules worked together reliably.

**Link 1**

View Trial Chamber flowchart

**Link 2**

Read full write-up

**Link 3**

Minecraft archive

---

# Part 3: Selected Problems

## Section heading

**Kicker**

03 · Ross application problems

**Heading**

Selected Problems

**Section note**

These are the four multi-part problems from my Ross application. Each card
includes every prompt and the key path from first approach to final solution.

## Problem 1: Number Wheels

**Problem number**

Ross 01

**Title**

Number Wheels

**Problem**

An n-wheel is a regular 2n-gon with a number at each vertex. It is balanced if
the sum of any two adjacent numbers equals the sum of the two numbers on the
opposite side of the polygon.

- (a) Find all balanced 2-wheels.
- (b) An n-wheel is primitive if each number equals the number on the opposite
  side. Verify that every primitive n-wheel is balanced.
- (c) For which values of n does a non-primitive balanced n-wheel exist? Explain
  your reasoning.
- (d) An n-wheel is classic if the 2n numbers are a rearrangement of 1, 2, 3,
  ..., 2n. For which n does a classic balanced n-wheel exist?
- (e) Explore n-wheels further. Invent your own questions and describe the
  progress you can make.

**My first approach**

I labeled a 2-wheel's vertices a, b, c, d in clockwise order and wrote the two
balance equations a+b = c+d and b+c = d+a. Subtracting gives a = c and b = d,
so I extended the same opposite-pair notation to larger wheels.

**Where it failed or became inefficient**

The direct 4-wheel construction failed: if opposite pairs differ by m, checking
the edges eventually gives a+d ≠ (a+m)+(d+m). Generalizing showed that for even
n the number of edges between opposite vertices is odd, so the alternating
non-primitive pattern cannot close.

**Key insight**

Primitivity makes balance automatic, while a non-primitive balanced wheel
requires opposite pairs to alternate around the polygon. That construction
closes exactly when n is odd, so parity separates the two cases.

**Final solution**

- (a) A balanced 2-wheel has a = c and b = d; opposite vertices must be equal.
- (b) If x_(i+n) = x_i, then x_i + x_(i+1) = x_(i+n) + x_(i+n+1), so every
  primitive n-wheel is balanced.
- (c) A balanced non-primitive n-wheel exists if and only if n is odd.
- (d) A classic balanced n-wheel exists if and only if n is odd; n = 3 is shown
  in the problem, and n = 5 can be constructed with m = n = 5 and consecutive
  values.
- (e) For a prime n-wheel, the required pairs are equivalent to infinitely many
  prime pairs with a fixed even gap. Zhang's bounded-gap theorem plus the
  pigeonhole principle guarantees such a fixed gap, proving that a balanced
  non-primitive prime n-wheel exists for every odd n.

**Key figure 1 caption**

Paper Figure 1 · Balanced 3-wheel example.

**Key figure 2 caption**

Paper Figure 3 · The non-primitive 4-wheel construction fails.

**Key figure 3 caption**

Paper Figure 4 · Balanced non-primitive 5-wheel: general construction and
example.

**Key figure 4 caption**

Paper Figure 6 · Alternating series used to construct prime n-wheels.

**Another possible method**

Encode the balance conditions as a circulant linear system and analyze rank and
parity instead of constructing vertices directly. The prime extension can be
treated as a bounded prime-gap problem.

## Problem 2: Fibonacci Fill-ins

**Problem number**

Ross 02

**Title**

Fibonacci Fill-ins

**Problem**

An f-sequence satisfies a_n = a_(n-1) + a_(n-2) for n ≥ 2. The classic
Fibonacci sequence has F_0 = 0, F_1 = 1.

- (a) If a_0 and a_1 are given, explain why
  a_n = F_(n-1)a_0 + F_n a_1 for every n ≥ 1.
- (b) If a_0 = a and a_4 = b, determine a_1, a_2, and a_3 in terms of a and b.
- (c) What property must integers a and b satisfy so that all entries of the
  f-sequence are integers when a_0 = a and a_4 = b?
- (d) More generally, for a positive index k, what property must integers a and
  b satisfy to make every entry an integer when a_0 = a and a_k = b?
- (e) What other questions do Fibonacci fill-ins inspire? Make progress on those
  questions.

**My first approach**

I proved the closed form by induction, then specialized n = 4 to solve for a_1,
a_2, and a_3, checking integrality by reducing the result modulo 3.

**Where it failed or became inefficient**

Testing divisibility term by term becomes unwieldy for a general index k.
Treating a and b as arbitrary integers also misses the exact modular condition,
so the n = 4 case does not scale directly.

**Key insight**

Every f-sequence is a fixed linear combination of Fibonacci numbers, so
integrality is controlled by one congruence modulo F_k. Matrix diagonalization
then gives a closed form for the same idea beyond the classical recurrence.

**Final solution**

- (a) The formula follows by induction using the Fibonacci recurrence.
- (b) a_1 = (b − 2a)/3, a_2 = (a + b)/3, and a_3 = (2b − a)/3.
- (c) The necessary and sufficient condition is b − 2a ≡ 0 (mod 3).
- (d) For general k, the condition is b ≡ F_(k-1)a (mod F_k).
- (e) A generalized sequence G_n = aG_(n-1) + bG_(n-2) has closed form
  G_n = (λ_1^n − λ_2^n)/(λ_1 − λ_2) with
  λ_(1,2) = (a ± √(a² + 4b))/2, plus a variant for nonzero initial terms.

**Another possible method**

Use generating functions or the Binet formula to derive the same linear
representation, then obtain the modular condition from the coefficient of a_1.

## Problem 3: Antiletters

**Problem number**

Ross 03

**Title**

Antiletters

**Problem**

In the theory of antiletters, subwords matching a given pattern can be deleted
or introduced, so different spellings can represent the same word.

- (a) With letters A, B, C and deletable subwords AA, BB, CC, ABAB, BCBC, CACA,
  how many distinct words can be made?
- (b) With letters A, B, C, D and deletable subwords AA, BB, CC, DD, ABAB,
  BCBC, CDCD, DADA, how many distinct words can be made?
- (c) With five letters A, B, C, D, E and the analogous rules, is there a sense
  in which five letters produce more possible words than four letters?
- (d) Invent your own patterns of deletable subwords and explore what happens.

**My first approach**

I treated every deletable word as zero and derived cancellation, commutation,
and reduction rules, then used those rules to enumerate equivalence classes of
words for three and four letters.

**Where it failed or became inefficient**

In four letters, ACAC and BDBD no longer vanish, so the three-letter
classification does not carry over. In five letters each letter has two
stabilizers, so infinitely many reduced words can exist and direct enumeration
stops being practical.

**Key insight**

Repeated letters are protected by stabilizers: between any two identical letters
there must be a stabilizer of that letter. This turns the word problem into an
algebraic structure based on cancellation, inverses, and commutation.

**Final solution**

- (a) The distinct words have representatives ABC, AB, AC, BC, A, B, and C,
  allowing permutations where the length is greater than one.
- (b) Valid words consist of one block of repeated A/C and one block of repeated
  B/D; the two stable blocks can swap as a whole.
- (c) Five letters produce infinitely many valid reduced words, governed by the
  stabilizer rule. One example is ADACDA—BDBEB—DADA.
- (d) The equivalence classes form a group under concatenation and cancellation.
  In the order-two cyclic case, commutativity is equivalent to
  ABAB = BABA = e; for order n, the converse fails in general, with the
  dihedral group D_8 providing a counterexample.

**Another possible method**

Describe the reductions with a string-rewriting system or finite-state automaton,
then use group presentations and canonical forms to classify the equivalence
classes.

## Problem 4: Hilbert Numbers

**Problem number**

Ross 04

**Title**

Hilbert Numbers

**Problem**

Hilbert numbers are integers of the form 4k + 1. A Hilbert number is prime if it
is larger than 1 and not a product of two smaller Hilbert numbers. More
generally, the m-Hilbert numbers are integers of the form mk + 1, with
m-Hilbert primes defined analogously.

- (a) For which values of m do the m-Hilbert integers factor uniquely into
  m-Hilbert primes?
- (b) Can you describe a sense in which the 4-Hilbert numbers are closer to
  unique factorization than the 5-Hilbert numbers? Is there an m with even worse
  factorization than m = 5?
- (c) What variations on these questions might you ask? Share some of your
  progress.

**My first approach**

I started from the fundamental theorem of arithmetic, listed the first few
m-Hilbert numbers, searched for composite m-Hilbert numbers, and looked for
different factorizations into m-Hilbert primes.

**Where it failed or became inefficient**

No general method emerges for finding the smallest counterexample because
m-Hilbert primes are irregular and depend on the distribution of ordinary
primes. Each m therefore tends to require individual calculation.

**Key insight**

If several primes are all congruent to −1 modulo m, then products of pairs are
congruent to 1 modulo m and can create multiple factorizations. For every
m ≥ 3, the identity (m−1)²(2m−1)² = [(m−1)(2m−1)]² produces a counterexample
to unique factorization.

**Final solution**

- (a) Unique factorization holds for m = 1 and m = 2, but fails for every
  m ≥ 3.
- (b) The smallest 4-Hilbert counterexample is 441 = 9·49 = 21², while the
  smallest 5-Hilbert counterexample is 336 = 6·56 = 16·21. Thus m = 4 is closer
  to unique factorization than m = 5. Since 100 = 4·25 = 10² is the smallest
  3-Hilbert counterexample, m = 3 is worse than m = 5 and all m ≥ 4.
- (c) Generalizing to S_(m,a) = {mk + a} requires m | a(a−1) for closure,
  forcing a = 1 when a < m. Choosing 2k primes with a common residue element of
  order k gives ½·C(2k,k) distinct factorizations; for m = 7, r = 2 and the
  primes 2, 23, 37, 79, 107, 149 give 10 factorizations.

**Another possible method**

Use modular arithmetic and finite group theory to construct factorizations
systematically, or search computationally over residue classes when only a
specific m is required.

---

# Part 4: How I Think Mathematically

**Kicker**

04 · Self-position

**Heading**

How I Think Mathematically

**Section note**

A short statement about how I approach mathematical work, kept within 100 words.

**Statement**

I see mathematical models through simple rules and parameters, identifying their
underlying relationships and predictable patterns. But I also challenge myself:
what if a principle is falsely stated? An unexpected result can expose a hidden
assumption, an omitted variable, or a boundary the model cannot cross.
Therefore, familiarity becomes mundane, while the border of rules becomes my
comfort zone. Reaching beyond the edge of rules, to me, is like walking along
the fence of a garden.

**Word count label**

76 words **(automatic)**

---

# Supplementary Project Materials

**Kicker**

More on GitHub

**Heading**

Supplementary Project Materials

**Section note**

Other projects and archives published on my GitHub.

## Thought Constellation

**Title**

Thought Constellation Knowledge Map

**Description**

An interactive knowledge map exploring connections between ideas.

**Link label**

Visit site

## School Club Matching

**Title**

School Club Matching System

**Description**

A matching system for school clubs based on interests and availability.

**Link label**

Visit site

## Minecraft Archive

**Title**

Minecraft Design & Systems Archive

**Description**

A long-term single-player archive of builds, redstone systems, and lessons
learned.

**Link label**

Visit site

---

# Footer

**Copyright**

© 2026 Max Zhang · Mathematical Research & Modeling Portfolio

**GitHub link**

GitHub profile

---

# 404 page

This is the text shown on `404.html`.

**Browser tab title**

Page not found | Max Zhang

**Eyebrow**

404

**Heading**

Page not found

**Description**

The page you were looking for does not exist or has moved.

**Button**

Back to the portfolio
