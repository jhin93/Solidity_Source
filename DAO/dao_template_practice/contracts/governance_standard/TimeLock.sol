// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../../node_modules/@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    // minDelay : How long you have to wait before executing
    // proposers :  List of addresses that can propose
    // execurots : Who can execute when a proposal passes
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController (minDelay, proposers, executors, admin) {}
}